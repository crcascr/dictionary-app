import React from "react";
import AudioPlayer from "@/app/components/AudioPlayer";
import { capitalizeFirstLetter } from "@/app/utils/helpers";
import { ExternalLink } from "lucide-react";

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

interface Source {
  sourceUrls: string[];
}

interface WordDefinitionProps {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sources: string[];
}

const WordDefinition: React.FC<WordDefinitionProps> = ({
  word,
  phonetics,
  meanings,
  sources,
}) => {
  const audioUrl = phonetics.find((p) => p.audio)?.audio || "";
  return (
    <div className="mb-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 dark:text-white">
            {word}
          </h2>
          <p className="text-purple-500 text-xl dark:text-purple-400 mb-2">
            {phonetics[0]?.text}
          </p>
        </div>
        {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      </div>
      {meanings.map((meaning, index) => (
        <div key={index} className="pt-5 mb-7">
          <h3 className="text-xl italic font-semibold mb-6 text-gray-800 dark:text-white">
            {capitalizeFirstLetter(meaning.partOfSpeech)}
          </h3>
          <p className="text-gray-500 text-lg dark:text-gray-300 mb-4">
            Meaning
          </p>
          <ol className="list-disc list-inside pl-4 marker:text-purple-600 dark:marker:text-purple-400">
            {meaning.definitions.map((def, i) => (
              <li key={i} className="mb-2 text-black dark:text-white">
                {def.definition}
                {def.example && (
                  <p className="text-gray-600 dark:text-gray-400 ml-5 mt-1">
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
      <div className="flex flex-row items-center">
        <p className="text-gray-500 dark:text-gray-300 text-sm mr-4">Source</p>
        {sources.map((source, index) => (
          <a
            key={index}
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 text-sm underline flex flex-row items-center"
          >
            {source}{" "}
            <ExternalLink className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-300" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default WordDefinition;
