import { useState, useEffect, useRef } from "react";
import { Form } from "react-router";

export default function DateUpdater() {
  return (
    <Form
      method="get"
      className="flex text-slate-700 text-sm gap-4 items-center"
    >
      <label htmlFor="order-date" className="text-nowrap">
        Visualizar Solicitações do dia:{" "}
      </label>
      <input type="date" id="order-date" name="createdAt" className="w-fit" />

      <button className="flat">Alterar
        <i className="ml-1 fa-solid text-xs fa-arrow-right-arrow-left"></i>
      </button>
    </Form>
  );
}