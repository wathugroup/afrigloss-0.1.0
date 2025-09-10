"use client";

import React, { useState } from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherCheck } from "@subframe/core";
import { FeatherCheckCircle } from "@subframe/core";
import VerificationCard from "./VerificationCard";

interface VerificationTerm {
  id: string;
  term: string;
  englishTerm: string;
  definition: string;
  score: number;
  reviewCount: number;
  variant: "success" | "warning" | "error";
}

function VerifierPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<VerificationTerm | null>(null);

  // Sample verification terms data
  const verificationTerms: VerificationTerm[] = [
    {
      id: "1",
      term: "Vhulimi (Agriculture)",
      englishTerm: "Agriculture",
      definition: "The science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products.",
      score: 4.8,
      reviewCount: 12,
      variant: "success"
    },
    {
      id: "2",
      term: "Mupo (Nature)",
      englishTerm: "Nature",
      definition: "The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth.",
      score: 4.6,
      reviewCount: 8,
      variant: "success"
    },
    {
      id: "3",
      term: "Pfunzo (Education)",
      englishTerm: "Education",
      definition: "The process of receiving or giving systematic instruction, especially at a school or university.",
      score: 4.9,
      reviewCount: 15,
      variant: "success"
    },
    {
      id: "4",
      term: "Vhutshilo (Life)",
      englishTerm: "Life",
      definition: "The condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change.",
      score: 4.7,
      reviewCount: 10,
      variant: "success"
    }
  ];

  const handleReviewClick = (term: VerificationTerm) => {
    setSelectedTerm(term);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTerm(null);
  };
  return (
    <div className="max-w-none flex h-full w-full flex-col items-start gap-6 pt-6">
      <div className="flex w-full items-center justify-between px-6">
        <span className="text-heading-2 font-heading-2 text-default-font">
          Term Verification
        </span>
        <Badge>4 terms pending</Badge>
      </div>
      <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-6">
        {verificationTerms.map((term, index) => (
          <div key={term.id} className={`flex w-full flex-wrap items-center gap-4 px-3 py-6 ${index < verificationTerms.length - 1 ? 'border-b border-solid border-neutral-border' : ''}`}>
            <IconWithBackground size="medium" icon={<FeatherCheckCircle />} />
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
              <span className="text-heading-3 font-heading-3 text-default-font">
                {term.term}
              </span>
              <div className="flex items-center gap-2">
                <Badge variant={term.variant}>{term.score}/5.0</Badge>
                <span className="text-body font-body text-subtext-color">
                  {term.reviewCount} reviews
                </span>
              </div>
            </div>
            <Button
              icon={<FeatherCheck />}
              onClick={() => handleReviewClick(term)}
            >
              Review
            </Button>
          </div>
        ))}
      </div>
      
      {selectedTerm && (
        <VerificationCard 
          term={selectedTerm}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default VerifierPanel;