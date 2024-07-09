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
  synonyms?: string[];
  antonyms?: string[];
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
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-6xl font-bold mb-2 dark:text-white">{word}</h2>
          <p className="text-purple-500 text-xl dark:text-purple-400 mb-2">
            {phonetics[0]?.text}
          </p>
        </div>
        {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      </div>
      {meanings.map((meaning, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl italic font-semibold mt-6 mb-6 text-gray-800 dark:text-white">
            {meaning.partOfSpeech}
          </h3>
          <p className="text-gray-500 text-lg dark:text-gray-300 mb-4">
            Meaning
          </p>
          <ol className="list-disc list-inside pl-4 marker:text-purple-600 dark:marker:text-purple-400">
            {meaning.definitions.map((def, i) => (
              <li key={i} className="mb-2 text-black dark:text-white">
                {def.definition}
                {def.example && (
                  <p className="text-gray-600 dark:text-gray-400 ml-4">
                    "{def.example}"
                  </p>
                )}
              </li>
            ))}
          </ol>
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div className="mt-4 flex items-center mb-2">
              <p className="text-gray-500 text-lg dark:text-gray-300">
                Synonyms:
              </p>
              <p className="text-purple-500 text-lg ml-4 font-semibold dark:text-purple-400">
                {meaning.synonyms.join(", ")}
              </p>
            </div>
          )}
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div className="mt-4 flex items-center mb-2">
              <p className="text-gray-500 text-lg dark:text-gray-300">
                Antonyms:
              </p>
              <p className="text-purple-500 text-lg ml-4 font-semibold dark:text-purple-400">
                {meaning.antonyms.join(", ")}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;
