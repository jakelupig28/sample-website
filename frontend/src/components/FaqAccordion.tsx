"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FaqAccordion.module.css";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqWrapper}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
            <button
              onClick={() => toggle(idx)}
              className={styles.faqQuestionBtn}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className={`${styles.iconRotator} ${isOpen ? styles.iconRotatorOpen : ""}`}>
                <ChevronDown size={16} />
              </span>
            </button>
            <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ""}`}>
              <p className={styles.faqAnswerText}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
