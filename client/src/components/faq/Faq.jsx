import { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How can I create a new note?",
      answer:
        "To create a new note, simply click the 'Create Note' button on the main screen, or use the keyboard shortcut Ctrl/Cmd + N.",
      isOpen: false,
    },
    {
      question: "Can I format my notes with rich text?",
      answer:
        "Yes, you can format your notes with rich text features such as bold, italics, lists, headers, and more.",
      isOpen: false,
    },
    {
      question: "Is my data secure in this app?",
      answer:
        "Yes, we take data security seriously. Your notes are encrypted, and we use the latest security measures to protect your information.",
      isOpen: false,
    },
    {
      question: "How do I sync my notes across devices?",
      answer:
        "Your notes are automatically synchronized across all your devices when you're connected to the internet. No extra steps required.",
      isOpen: false,
    },
    {
      question: "Can I collaborate with others on notes?",
      answer:
        "Yes, you can share notes with others and collaborate in real-time. Just click 'Share' and enter their email.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = prevFaqs.map((faq, faqIndex) => {
        if (faqIndex === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return { ...faq, isOpen: false };
      });
      return updatedFaqs;
    });
  };

  return (
    <div className="faq" id="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${faq.isOpen ? "open" : ""}`} key={index}>
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <i
                className={`icon ${
                  faq.isOpen ? "fa fa-chevron-up" : "fa fa-chevron-down"
                }`}
              ></i>
            </div>
            {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
