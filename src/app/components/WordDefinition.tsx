import React from "react";
import AudioPlayer from "@/app/components/AudioPlayer";

interface Phonetic {
  text?: string;
  audio?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
}

interface WordDefinitionProps {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

const WordDefinition: React.FC<WordDefinitionProps> = ({
  word,
  phonetics,
  meanings,
}) => {
  const audioUrl = phonetics.find((p) => p.audio)?.audio || "";
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{word}</h2>
      {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      {phonetics.map(
        (phonetic, index) =>
          phonetic.text && (
            <p key={index} className="text-gray-600 dark:text-gray-400 mb-2">
              {phonetic.text}
            </p>
          )
      )}
      {meanings.map((meaning, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{meaning.partOfSpeech}</h3>
          <ol className="list-decimal list-inside">
            {meaning.definitions.map((def, i) => (
              <li key={i} className="mb-2">
                {def.definition}
                {def.example && (
                  <p className="text-gray-600 dark:text-gray-400 ml-4">
                    Example: {def.example}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;
