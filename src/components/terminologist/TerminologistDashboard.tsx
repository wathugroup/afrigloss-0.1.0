"use client";

import React, { useState } from "react";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { FeatherBook } from "@subframe/core";
import { FeatherCheck } from "@subframe/core";
import { FeatherEdit2 } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import ReviewTermCard from "./ReviewTermCard";

interface Term {
  id: string;
  englishTerm: string;
  translation: string;
  language: string;
  definition?: string;
  submittedBy: string;
  submitterId: string;
  avatar: string;
  score: number;
  reviewerCount: number;
}

function TerminologistDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  // Sample terms data
  const terms: Term[] = [
    {
      id: "1",
      englishTerm: "Harvest",
      translation: "Khungelwa",
      language: "Tshivenda Translation",
      definition: "The process of gathering mature crops from the fields.",
      submittedBy: "Sarah M.",
      submitterId: "#A392E4",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
      score: 7,
      reviewerCount: 123
    },
    {
      id: "2",
      englishTerm: "Irrigation",
      translation: "Kunisela",
      language: "Tshivenda Translation",
      definition: "The artificial application of water to land or soil for agricultural purposes.",
      submittedBy: "John D.",
      submitterId: "#B493F5",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3",
      score: 9,
      reviewerCount: 87
    },
    {
      id: "3",
      englishTerm: "Fertilizer",
      translation: "Manyoro",
      language: "Tshivenda Translation",
      definition: "A chemical or natural substance added to soil to increase its fertility.",
      submittedBy: "Mike R.",
      submitterId: "#C594G6",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3",
      score: 4,
      reviewerCount: 45
    }
  ];

  const handleReviewClick = (term: Term) => {
    setSelectedTerm(term);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTerm(null);
  };
  // Helper function to get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 8) return { bg: 'bg-success-100', bar: 'bg-success-500', text: 'text-success-700' };
    if (score >= 6) return { bg: 'bg-warning-100', bar: 'bg-warning-500', text: 'text-warning-700' };
    return { bg: 'bg-error-100', bar: 'bg-error-500', text: 'text-error-700' };
  };

  // Helper function to render score
  const renderScore = (score: number, reviewerCount: number) => {
    const colors = getScoreColor(score);
    const displayScore = score.toFixed(1);
    
    return (
      <div className="flex flex-col items-end">
        <div className={`px-2 py-1 rounded ${colors.bg}`}>
          <span className={`text-body-bold font-body-bold ${colors.text}`}>
            {displayScore}/10
          </span>
        </div>
        <span className="text-caption font-caption text-subtext-color mt-1">
          {reviewerCount} reviews
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-none flex h-full w-full flex-col items-start gap-4 py-8">
      <div className="flex w-full items-center justify-between px-6">
        <span className="text-heading-2 font-heading-2 text-default-font">
          Terms Pending Review
        </span>
      </div>
      <div className="flex w-full flex-col items-start gap-4 px-6">
        {terms.map((term) => (
          <div key={term.id} className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  {term.englishTerm}
                </span>
                <span className="text-body font-body text-subtext-color">
                  English Term
                </span>
              </div>
              {renderScore(term.score, term.reviewerCount)}
            </div>
            <div className="flex w-full flex-col items-start gap-4 rounded-md bg-neutral-50 px-6 py-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  {term.translation}
                </span>
                <span className="text-body font-body text-subtext-color">
                  {term.language}
                </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar
                  size="small"
                  image={term.avatar}
                >
                  {term.submittedBy.charAt(0).toUpperCase()}
                </Avatar>
                <span className="text-body font-body text-subtext-color">
                  Submitted by {term.submittedBy}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="neutral-tertiary"
                  icon={<FeatherEdit2 />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Edit
                </Button>
                <Button
                  icon={<FeatherCheck />}
                  onClick={() => handleReviewClick(term)}
                >
                  Review
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedTerm && (
        <ReviewTermCard 
          term={selectedTerm}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default TerminologistDashboard;