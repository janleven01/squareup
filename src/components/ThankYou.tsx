import SectionHeader from "./SectionHeader";

const ThankYou = () => {
  return (
    <div className="max-container">
      <SectionHeader
        title="Thank you for your Interest in SquareUp."
        description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        imageUrl="/images/faq-bg.png"
        iconUrl="/logo.svg"
        startProject={true}
      />
    </div>
  );
};

export default ThankYou;
