import img from "../assets/h6-img-02.jpg";
import Button from "./Button";

const FindMore = () => {
  return (
    <div className=" lg:border-t-2 border-secondary-color lg:border-b-2 lg:flex justify-between items-center gap-4 my-10 md:my-28">
      <img className="lg:w-1/2" src={img} alt="" />
      <div className="lg:w-1/2 my-10 mx-20  flex gap-12 flex-col items-end">
        <h3 className="text-4xl text-right">
          Find out more about amazing opportunities
        </h3>
        <p className="text-right text-secondary-color font-semibold tracking-wider">
          Welcome to our Technology and Electronics website, your gateway to a
          world of innovation and possibilities. Find more opportunities for
          discovery and advancement in the ever-evolving realm of tech
        </p>
        <Button>View more</Button>
      </div>
    </div>
  );
};

export default FindMore;
