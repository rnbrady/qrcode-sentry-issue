"use client";

import { defineCustomElements } from "@bitjson/qr-code";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    defineCustomElements(window);
  }, []);

  return (
    <div>
      <main>
        {/* @ts-expect-error because it's a web componenent */}
        <qr-code
          value="Hello world"
          module-color="white"
          position-ring-color="white"
          position-center-color="white"
        />
      </main>
    </div>
  );
}
