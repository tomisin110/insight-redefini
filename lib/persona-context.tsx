"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Persona, personas, defaultPersona } from "./mock-data";

type PersonaContextType = {
  persona: Persona;
  setPersonaById: (id: string) => void;
};

const PersonaContext = createContext<PersonaContextType>({
  persona: defaultPersona,
  setPersonaById: () => {},
});

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [persona, setPersona] = useState<Persona>(defaultPersona);

  useEffect(() => {
    const storedId = window.localStorage.getItem("ir-persona");
    if (storedId) {
      const found = personas.find((p) => p.id === storedId);
      if (found) setPersona(found);
    }
  }, []);

  function setPersonaById(id: string) {
    const found = personas.find((p) => p.id === id);
    if (found) {
      setPersona(found);
      window.localStorage.setItem("ir-persona", id);
    }
  }

  return (
    <PersonaContext.Provider value={{ persona, setPersonaById }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  return useContext(PersonaContext);
}
