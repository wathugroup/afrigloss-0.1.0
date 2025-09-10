"use client";

import React from "react";
import { FeatherCheckCircle } from "@subframe/core";
import { FeatherVolume2 } from "@subframe/core";
import { FeatherCopy } from "@subframe/core";
import { FeatherBookmark } from "@subframe/core";
import { Button } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";

function SearchHeader() {
  const handlePlayPronunciation = (term: string) => {
    // TODO: Implement text-to-speech or audio playback
    console.log(`Playing pronunciation for: ${term}`);
  };

  const handleCopyTerm = (term: string, translation: string) => {
    const textToCopy = `${term} (${translation})`;
    navigator.clipboard.writeText(textToCopy);
    console.log(`Copied: ${textToCopy}`);
  };

  const handleBookmarkTerm = (term: string) => {
    // TODO: Implement bookmark functionality
    console.log(`Bookmarked: ${term}`);
  };

  return (
    <div className="max-w-none flex h-full w-full flex-col items-start gap-4 pt-6">
      <div className="flex w-full flex-col items-start gap-6 px-6">
        <div className="flex w-full items-center justify-between">
          <span className="text-heading-2 font-heading-2 text-default-font">
            AfriGloss Tshivenda Dictionary
          </span>
        </div>
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-start gap-3 py-3 border-b border-neutral-200">
            <FeatherCheckCircle className="text-lg text-success-600 mt-1 flex-shrink-0" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-body-bold font-body-bold text-default-font">
                    Khomphyutha <span className="text-body font-body text-subtext-color">(Computer)</span>
                  </h3>
                  <span className="text-caption font-caption text-subtext-color">
                    /kʰom.pʰju.tʰa/
                  </span>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherVolume2 />}
                    onClick={() => handlePlayPronunciation('Khomphyutha')}
                    className="!bg-transparent hover:!bg-neutral-100"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Tooltip content="Copy term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherCopy />}
                      onClick={() => handleCopyTerm('Khomphyutha', 'Computer')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                  <Tooltip content="Bookmark term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={() => handleBookmarkTerm('Khomphyutha')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                </div>
              </div>
              <p className="text-body font-body text-subtext-color leading-relaxed">
                Mudidimvumbe wa elekitroniki une wa kona u vhulunga, u wana, na u dzudzanya data, u ita mbalo, na u langa minwe mitshini.
              </p>
              <span className="inline-block bg-success-100 text-success-700 text-caption font-caption px-2 py-1 rounded w-fit">
                PANSALB Verified
              </span>
            </div>
          </div>
          
          <div className="w-full flex items-start gap-3 py-3 border-b border-neutral-200">
            <FeatherCheckCircle className="text-lg text-success-600 mt-1 flex-shrink-0" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-body-bold font-body-bold text-default-font">
                    Vhuswa <span className="text-body font-body text-subtext-color">(Porridge)</span>
                  </h3>
                  <span className="text-caption font-caption text-subtext-color">
                    /vʰu.swa/
                  </span>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherVolume2 />}
                    onClick={() => handlePlayPronunciation('Vhuswa')}
                    className="!bg-transparent hover:!bg-neutral-100"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Tooltip content="Copy term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherCopy />}
                      onClick={() => handleCopyTerm('Vhuswa', 'Porridge')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                  <Tooltip content="Bookmark term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={() => handleBookmarkTerm('Vhuswa')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                </div>
              </div>
              <p className="text-body font-body text-subtext-color leading-relaxed">
                A traditional staple food made from maize meal, cooked with water until it reaches a thick, smooth consistency. Commonly served as the main component of meals.
              </p>
              <span className="inline-block bg-success-100 text-success-700 text-caption font-caption px-2 py-1 rounded w-fit">
                PANSALB Verified
              </span>
            </div>
          </div>
          
          <div className="w-full flex items-start gap-3 py-3">
            <FeatherCheckCircle className="text-lg text-success-600 mt-1 flex-shrink-0" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-body-bold font-body-bold text-default-font">
                    Mutshidzi <span className="text-body font-body text-subtext-color">(Helper)</span>
                  </h3>
                  <span className="text-caption font-caption text-subtext-color">
                    /mu.tʃʰi.d͡zi/
                  </span>
                  <Button
                    variant="neutral-tertiary"
                    size="small"
                    icon={<FeatherVolume2 />}
                    onClick={() => handlePlayPronunciation('Mutshidzi')}
                    className="!bg-transparent hover:!bg-neutral-100"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Tooltip content="Copy term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherCopy />}
                      onClick={() => handleCopyTerm('Mutshidzi', 'Helper')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                  <Tooltip content="Bookmark term">
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={<FeatherBookmark />}
                      onClick={() => handleBookmarkTerm('Mutshidzi')}
                      className="!bg-transparent hover:!bg-neutral-100"
                    />
                  </Tooltip>
                </div>
              </div>
              <p className="text-body font-body text-subtext-color leading-relaxed">
                A person who provides assistance or aid to others. Often used in contexts of community support and mutual assistance.
              </p>
              <span className="inline-block bg-success-100 text-success-700 text-caption font-caption px-2 py-1 rounded w-fit">
                PANSALB Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;