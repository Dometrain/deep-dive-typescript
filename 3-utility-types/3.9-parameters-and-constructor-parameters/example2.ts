// Parameters utility type with function type
type LogFunction = (message: string, color: "black" | "red") => void;

type LogFunctionParams = Parameters<LogFunction>;
