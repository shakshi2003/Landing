import PropTypes from "prop-types";

const TeamDescription = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-mid text-gray1-100 font-sf-caption-1-regular mq750:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-center justify-start p-4 text-gray-900">
        <div className="h-[26px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[4px]">
          <div className="relative tracking-[-0.41px] leading-[22px] font-medium inline-block min-w-[69px]">
            Project 1
          </div>
          <img className="w-12 h-0.5 relative" alt="" src="/vector-109-1.svg" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start p-4">
        <div className="relative tracking-[-0.41px] leading-[22px] inline-block min-w-[69px]">
          Project 2
        </div>
      </div>
      <div className="flex flex-row items-center justify-start p-4">
        <div className="relative tracking-[-0.41px] leading-[22px] inline-block min-w-[70px]">
          Project 3
        </div>
      </div>
      <div className="flex flex-row items-center justify-start p-4">
        <div className="relative tracking-[-0.41px] leading-[22px] inline-block min-w-[70px]">
          Project 4
        </div>
      </div>
    </div>
  );
};

TeamDescription.propTypes = {
  className: PropTypes.string,
};

export default TeamDescription;
