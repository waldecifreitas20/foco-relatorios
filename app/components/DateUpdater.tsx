import { useState, useEffect, useRef } from "react";
import { Form } from "react-router";

export default function DateUpdater() {
  const formRef = useRef<any>(null);

  return (
    <Form 
    ref={formRef}
    method="get" 
    className="flex text-slate-700 text-sm gap-4 items-center">
      <label htmlFor="order-date" className="text-nowrap">Visualizar Solicitações do dia: </label>
      <input
        type="date"
        id="order-date"
        name="createdAt"
        className="w-fit"
        onChange={(e) => formRef?.current?.submit()}
      />
    </Form>
  );
}