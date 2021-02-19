import { useState } from "react";
import { ConfigForm } from "./components/ConfigForm/ConfigForm";

const App = () => {
    const [configDraft, setConfigDraft] = useState({
            width: 12,
            height: 12,
            rate: 0.1,
        }
    );
    const [config, setConfig] = useState(() => configDraft);
    return (
    <div>
      <ConfigForm
          config={config}
      />
    </div>
  );
}

export default App;
