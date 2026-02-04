"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '', left: '' });

  const yesButtonSize = Math.min(noCount * 50 + 32, 1200); // taille qui augmente légèrement

  const handleNoClick = () => {
    setNoCount(noCount + 1);

    const top = Math.floor(Math.random() * 60) + 20; 
    const left = Math.floor(Math.random() * 60) + 20; 
    setNoPosition({ top: `${top}%`, left: `${left}%` });
  };

  const getNoButtonText = () => {
    const phrases = [
      "Allez, juste un petit oui ?",
      "J’insiste 😌",
      "Ça serait sympa de dire oui juste cette fois, Sunny",
      "Juste pour aujourd’hui, ça me ferait plaisir, Princesse",
      "Je ne demande qu’un petit oui 😏",
      "Tu peux au moins réfléchir avant de dire non ?",
      "Un petit geste pour moi ?",
      "Tu rends chaque moment plus joli, Leila",
      "Allez, laisse-moi te convaincre !",
      "Juste un instant… ça vaut le coup",
      "Je sais que tu ne le regretteras pas 😊",
      "Un petit oui, et je te promets un câlin",
      "Allez, ça pourrait être notre moment 💖",
    ];
    const index = noCount % phrases.length;

    return phrases[index];
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-pink-50">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/milk-and-mocha-kiss-2vwjr4s7usa2g5kj.gif" />
          <div className="my-4 text-4xl font-bold text-pink-700">
           LET'S GOOO !!!!! Merci d’avoir dit oui, good grirl ! 💖
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl text-pink-600">Will you be my Valentine?</h1>
          <div className="relative flex w-full items-center justify-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              style={
                    noPosition.top !== ''
                      ? {
                          position: "absolute",
                          top: noPosition.top,
                          left: noPosition.left,
                          transform: "translate(-50%, -50%)",
                        }
                      : {} // pas de style, reste dans le flex à droite de "Yes"
                  }
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
