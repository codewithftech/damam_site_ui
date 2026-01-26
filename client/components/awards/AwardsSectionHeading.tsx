export default function AwardsSectionHeading({
  leftBold,
  rightText,
  singleText,
}: {
  leftBold?: string;
  rightText?: string;
  singleText?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8 lg:mb-[106px]">
      <div className="w-1 h-[34px] bg-brand-purple" />
      {singleText ? (
        <h3 className="text-[24px] lg:text-[29px] font-extrabold leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px] text-brand-purple">
          {singleText}
        </h3>
      ) : (
        <h3 className="text-[24px] lg:text-[29px] font-medium leading-[24px] tracking-[-0.48px] lg:tracking-[-0.58px]">
          <span className="font-extrabold text-brand-purple">{leftBold} </span>
          <span className="text-brand-gray">{rightText}</span>
        </h3>
      )}
    </div>
  );
}

