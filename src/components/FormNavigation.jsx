import { useState } from "react";

const FormNavigation = () => {
    const [currentScreen, setCurrentScreen] = useState("intro");
    const [answers, setAnswers] = useState({});

    const handleAnswer = (question, answer) => {
        setAnswers((prev) => ({ ...prev, [question]: answer }));

        // Logic to navigate to the next screen based on answers
        if (question === "q6") {
            if (answer === "A" || answer === "B") {
                setCurrentScreen("mvp1");
            } else if (["C", "D", "E"].includes(answer)) {
                setCurrentScreen("comunicacion1");
            }
        } else if (question === "mvp1") {
            if (answer === "A") {
                setCurrentScreen("mvp2");
            } else if (["B", "C"].includes(answer)) {
                setCurrentScreen("talento1");
            }
        } else if (question === "talento1") {
            if (answer === "A") {
                setCurrentScreen("talento2");
            } else if (["B", "C"].includes(answer)) {
                setCurrentScreen("fin");
            }
        }
    };

    const handleSubmit = async () => {
        // Save answers to the database
        try {
            await fetch("/api/saveAnswers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(answers),
            });
            alert("Respuestas guardadas exitosamente.");
        } catch (error) {
            console.error("Error saving answers:", error);
            alert("Hubo un error al guardar las respuestas.");
        }
    };

    const screens = {
        intro: (
            <div>
                <h2>Introducción</h2>
                <button onClick={() => setCurrentScreen("q6")}>Comenzar</button>
            </div>
        ),
        q6: (
            <div>
                <h2>6. Selecciona tu respuesta:</h2>
                {[
                    { label: "A", value: "A" },
                    { label: "B", value: "B" },
                    { label: "C", value: "C" },
                    { label: "D", value: "D" },
                    { label: "E", value: "E" },
                ].map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleAnswer("q6", option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        ),
        mvp1: (
            <div>
                <h2>MVP 1</h2>
                {[
                    { label: "A", value: "A" },
                    { label: "B", value: "B" },
                    { label: "C", value: "C" },
                ].map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleAnswer("mvp1", option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        ),
        comunicacion1: (
            <div>
                <h2>Comunicación 1</h2>
                <button onClick={() => setCurrentScreen("fin")}>Siguiente</button>
            </div>
        ),
        mvp2: (
            <div>
                <h2>MVP 2</h2>
                <button onClick={() => setCurrentScreen("fin")}>Finalizar</button>
            </div>
        ),
        talento1: (
            <div>
                <h2>Talento 1</h2>
                {[
                    { label: "A", value: "A" },
                    { label: "B", value: "B" },
                    { label: "C", value: "C" },
                ].map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleAnswer("talento1", option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        ),
        talento2: (
            <div>
                <h2>Talento 2</h2>
                <button onClick={() => setCurrentScreen("fin")}>Finalizar</button>
            </div>
        ),
        fin: (
            <div>
                <h2>¡Gracias por participar!</h2>
                <button onClick={handleSubmit}>Guardar Respuestas</button>
            </div>
        ),
    };

    return <div>{screens[currentScreen]}</div>;
};

export default FormNavigation;
