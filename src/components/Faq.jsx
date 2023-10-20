import img from "../assets/h6-img-02.jpg";
const Faq = () => {
  return (
    <div className="lg:flex justify-between items-start gap-4 my-10 md:my-28">
      <div className="join join-vertical mx-11 flex flex-col items-center justify-center">
        <h3 className="text-4xl text-primary-color dark:text-stone-300">FAQ</h3>
        <div className="collapse collapse-arrow join-item ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium flex gap-3">
            <span className="tracking-widest text-secondary-color dark:text-stone-300">
              01
            </span>
            <span className="text-stone-800 hover:text-stone-300 text-left">
              What is the future of technology, and how will it impact our
              lives?
            </span>
          </div>
          <div className="collapse-content">
            <p className="border-t-[1px] border-stone-600 rounded-none pt-2 md:text-lg text-sm  text-secondary-color dark:text-stone-400 text-left">
              The future of technology holds promises and challenges. Emerging
              technologies like artificial intelligence (AI), the Internet of
              Things (IoT), and automation will continue to transform industries
              and daily life. They offer benefits such as improved convenience
              and efficiency, but they also raise questions about privacy and
              job displacement. Staying informed and adaptable is crucial in
              navigating this future.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium flex gap-3">
            <span className="tracking-widest text-secondary-color dark:text-stone-300">
              02
            </span>
            <span className="text-stone-800 hover:text-stone-300 text-left">
              What is the difference between OLED and QLED displays?
            </span>
          </div>
          <div className="collapse-content">
            <p className="border-t-[1px] border-stone-600 rounded-none pt-2 md:text-lg text-sm text-secondary-color dark:text-stone-400 text-left">
              OLED (Organic Light-Emitting Diode) displays offer individual
              pixel illumination, resulting in deeper blacks and more vibrant
              colors. QLED (Quantum Dot Light Emitting Diode) displays use
              quantum dots to enhance color accuracy and brightness. The choice
              between them depends on your specific preferences and usage.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium flex gap-3">
            <span className="tracking-widest text-secondary-color dark:text-stone-300">
              03
            </span>
            <span className="text-stone-800 hover:text-stone-300 text-left">
              What are the latest trends in consumer electronics?
            </span>
          </div>
          <div className="collapse-content">
            <p className="border-t-[1px] border-stone-600 rounded-none pt-2 md:text-lg text-sm text-secondary-color dark:text-stone-400  text-left">
              The latest trends in consumer electronics include the rise of
              foldable smartphones, the adoption of 5G technology, smart home
              automation, sustainable and eco-friendly tech products, and
              advancements in virtual reality and augmented reality (VR/AR)
              devices.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium flex gap-3">
            <span className="tracking-widest text-secondary-color dark:text-stone-300">
              04
            </span>
            <span className="text-stone-800 hover:text-stone-300 text-left">
              How do I cancel my order?
            </span>
          </div>
          <div className="collapse-content">
            <p className="border-t-[1px] border-stone-600 rounded-none pt-2 md:text-lg text-sm text-secondary-color dark:text-stone-400  text-left">
              To cancel your order, please follow these steps: Log in to your
              account on our website. Go to your order history or order tracking
              page. Locate the order you wish to cancel and click on it for
              details. Look for the "Cancel Order" or "Request Cancellation"
              button and click on it. Follow the on-screen instructions to
              confirm your cancellation request
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item ">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium flex gap-3">
            <span className="tracking-widest text-secondary-color dark:text-stone-300">
              05
            </span>
            <span className="text-stone-800 hover:text-stone-300 text-left">
              How do I troubleshoot common tech issues at home?
            </span>
          </div>
          <div className="collapse-content">
            <p className="border-t-[1px] border-stone-600 rounded-none pt-2 md:text-lg  text-left text-sm text-secondary-color dark:text-stone-400">
              To troubleshoot common tech issues at home, start by rebooting
              your device, checking for software updates, ensuring your
              connections are secure, and consulting online forums or user
              manuals. If the problem persists, you may need to contact customer
              support or a professional technician.
            </p>
          </div>
        </div>
      </div>
      <img className="lg:w-1/2" src={img} alt="" />
    </div>
  );
};

export default Faq;
