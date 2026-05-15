(function () {
  "use strict";

  const STORAGE_KEY = "decision-ledger:v1";
  const STATUS = "proposed";
  const WRITE_ERROR = "Could not save. Your browser storage may be full.";

  let decisions = [];

  function generateId() {
    if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
      return "d_" + globalThis.crypto.randomUUID();
    }

    return (
      "d_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).slice(2, 10)
    );
  }

  function isValidStoredDecision(value) {
    return (
      value !== null &&
      typeof value === "object" &&
      typeof value.id === "string" &&
      value.id.length > 0 &&
      typeof value.title === "string" &&
      value.title.length > 0 &&
      typeof value.rationale === "string" &&
      value.rationale.length > 0 &&
      typeof value.owner === "string" &&
      value.owner.length > 0 &&
      value.status === STATUS &&
      typeof value.createdAt === "string" &&
      value.createdAt.length > 0 &&
      typeof value.updatedAt === "string" &&
      value.updatedAt.length > 0
    );
  }

  function readStoredDecisions() {
    let rawValue;

    try {
      rawValue = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      console.warn("[decision-ledger] Could not read saved decisions.", error);
      return [];
    }

    if (rawValue === null) {
      return [];
    }

    try {
      const parsedValue = JSON.parse(rawValue);

      if (!Array.isArray(parsedValue)) {
        console.warn("[decision-ledger] Saved decisions were not an array.");
        return [];
      }

      return parsedValue.filter(isValidStoredDecision);
    } catch (error) {
      console.warn("[decision-ledger] Could not parse saved decisions.", error);
      return [];
    }
  }

  function createDecisionItem(decision) {
    const item = document.createElement("li");
    item.dataset.decisionId = decision.id;

    const title = document.createElement("h3");
    title.textContent = decision.title;

    const rationale = document.createElement("p");
    rationale.textContent = decision.rationale;

    const meta = document.createElement("p");
    const createdAt = new Date(decision.createdAt);
    const createdLabel = Number.isNaN(createdAt.getTime())
      ? decision.createdAt
      : createdAt.toLocaleString();
    meta.textContent = decision.owner + " - " + createdLabel;

    const status = document.createElement("p");
    status.textContent = "Status: " + decision.status;

    item.append(title, rationale, meta, status);
    return item;
  }

  function renderDecisions(decisionList, emptyState) {
    decisionList.replaceChildren(...decisions.map(createDecisionItem));
    toggleEmptyState(emptyState);
  }

  function toggleEmptyState(emptyState) {
    emptyState.hidden = decisions.length > 0;
  }

  function setError(errorElement, message) {
    errorElement.textContent = message;
  }

  function validateField(field, minLength, maxLength, emptyMessage, tooLongMessage) {
    const value = field.value.trim();

    if (value.length < minLength) {
      return { field, message: emptyMessage, value };
    }

    if (value.length > maxLength) {
      return { field, message: tooLongMessage, value };
    }

    return { field, message: "", value };
  }

  function validateForm(titleField, rationaleField, ownerField) {
    const title = validateField(
      titleField,
      1,
      120,
      "Enter a decision title.",
      "Keep the decision title to 120 characters or fewer."
    );

    if (title.message) {
      return title;
    }

    const rationale = validateField(
      rationaleField,
      1,
      2000,
      "Enter the rationale for this decision.",
      "Keep the rationale to 2000 characters or fewer."
    );

    if (rationale.message) {
      return rationale;
    }

    const owner = validateField(
      ownerField,
      1,
      60,
      "Enter an owner.",
      "Keep the owner to 60 characters or fewer."
    );

    if (owner.message) {
      return owner;
    }

    return {
      title: title.value,
      rationale: rationale.value,
      owner: owner.value,
    };
  }

  function handleSubmit(event, elements) {
    event.preventDefault();

    const result = validateForm(
      elements.titleField,
      elements.rationaleField,
      elements.ownerField
    );

    if (result.message) {
      setError(elements.errorElement, result.message);
      result.field.focus();
      return;
    }

    const timestamp = new Date().toISOString();
    const decision = {
      id: generateId(),
      title: result.title,
      rationale: result.rationale,
      owner: result.owner,
      status: STATUS,
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    const candidateList = [decision].concat(decisions);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(candidateList));
    } catch (_error) {
      setError(elements.errorElement, WRITE_ERROR);
      return;
    }

    decisions = candidateList;
    elements.decisionList.prepend(createDecisionItem(decision));
    elements.titleField.value = "";
    elements.rationaleField.value = "";
    elements.ownerField.value = "";
    elements.titleField.focus();
    toggleEmptyState(elements.emptyState);
    setError(elements.errorElement, "");
  }

  function requireElement(selector) {
    const element = document.querySelector(selector);

    if (!element) {
      throw new Error("Missing required element: " + selector);
    }

    return element;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const elements = {
      form: requireElement("#add-decision-form"),
      titleField: requireElement("#decision-title"),
      rationaleField: requireElement("#decision-rationale"),
      ownerField: requireElement("#decision-owner"),
      submitButton: requireElement("#decision-submit"),
      errorElement: requireElement("#decision-form-error"),
      decisionList: requireElement("#decision-list"),
      emptyState: requireElement("#decision-empty-state"),
    };

    decisions = readStoredDecisions();
    renderDecisions(elements.decisionList, elements.emptyState);

    elements.form.addEventListener("submit", function (event) {
      handleSubmit(event, elements);
    });
  });
})();
