import React from "react";
import Link from "next/link";
import Base from "@layouts/Baseof";
import theme from "@config/theme.json";

const ConsultarProtocolo = () => {
  return (
    <Base>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="rounded p-4 shadow-lg">
          <h1 className="mt-6 text-left lg:text-[55px]">
            Consulta de processos administrativos
          </h1>
          <div className="mb-4 mt-4">
            <label htmlFor="numeroDocumento" className="mr-2">
              Número do Processo
            </label>
            <input
              id="numeroDocumento"
              name="numeroDocumento"
              type="text"
              autoComplete="off"
              placeholder="Número"
              className="input-field mr-2"
              maxLength="9"
              inputMode="numeric"
              size="8"
              aria-readonly="false"
              aria-disabled="false"
            />
            <span className="mr-2">/</span>
            <input
              id="ano"
              name="ano"
              type="text"
              autoComplete="off"
              placeholder="Ano"
              className="input-field"
              maxLength="4"
              inputMode="numeric"
              size="4"
              aria-readonly="false"
              aria-disabled="false"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="protocoladoEm" className="mr-2">
              Protocolado em
            </label>
            <input
              id="protocoladoEm"
              name="protocoladoEm"
              type="text"
              className="input-field mr-2"
              placeholder="De"
              aria-readonly="false"
              aria-disabled="false"
            />
            <span className="mr-2">/</span>
            <input
              id="protocoladosPeriodoFim"
              name="protocoladosPeriodoFim"
              type="text"
              className="input-field"
              placeholder="Até"
              aria-readonly="false"
              aria-disabled="false"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="temas" className="mr-2">
              Outras Características
            </label>
            <select
              id="temas"
              name="temas"
              className="input-field mr-2"
              aria-haspopup="listbox"
              aria-expanded="false"
              defaultValue=""
            >
              <option value="" disabled>
                Tema
              </option>
              <option value="491">SISTEMA PROAD</option>
            </select>
            <span className="mr-2">/</span>
            <select
              id="assuntos"
              name="assuntos"
              className="input-field"
              aria-haspopup="listbox"
              aria-expanded="false"
              defaultValue=""
            >
              <option value="" disabled>
                Assunto
              </option>
              <option value="2182">REQUERIMENTO USUÁRIO EXTERNO</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button className="btn-secondary mr-2">Limpar</button>
            <button className="btn-primary">Consultar</button>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ConsultarProtocolo;
