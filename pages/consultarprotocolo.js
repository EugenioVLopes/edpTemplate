import React from "react";
import Link from "next/link";
import Base from "@layouts/Baseof";
import theme from "@config/theme.json";

const ConsultarProtocolo = () => {
  return (
    <Base>
      <div className="mt-10 lg:mt-0">
        <div className="rounded border border-border p-6 dark:border-darkmode-border ">
          <h1 className="h1 mt-6 text-left lg:text-[55px]">
            Consulta de processos administrativos
          </h1>
        </div>
      </div>
    </Base>
  );
};

export default ConsultarProtocolo;
