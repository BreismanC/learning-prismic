type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-2xl text-slate-600 font-body text-center font-normal leading-10 mb-4 md:mb-8 max-w-md mx-auto">
      {children}
    </p>
  );
};
