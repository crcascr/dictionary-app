import React from "react";
import AudioPlayer from "@/app/components/AudioPlayer";

interface WordDefinitionProps {
  word: string;
  definitions: any[];
}

const WordDefinition: React.FC<WordDefinitionProps> = ({
  word,
  definitions,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{word}</h2>
      {definitions.map((def, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{def.partOfSpeech}</h3>
          <ol className="list-decimal list-inside">
            {def.definitions.map((d: any, i: number) => (
              <li key={i} className="mb-2">
                {d.definition}
                {d.example && (
                  <p className="text-gray-600 ml-4">Example: {d.example}</p>
                )}
              </li>
            ))}
          </ol>
          {def.phonetics && def.phonetics[0]?.audio && (
            <AudioPlayer audioUrl={def.phonetics[0].audio} />
          )}
        </div>
      ))}
    </div>
  );
};

export default WordDefinition;
