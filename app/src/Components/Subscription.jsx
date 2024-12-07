import PaypalButtons from "./PaypalButtons";

const Subscription = () => {
  const plans = [
    {
      id: 1,
      tier: "Standard Monthly",
      cost: "49/monthly",
      feature: "feature",
      cta: "Choose Plan",
    },
    {
      id: 2,
      tier: "Standard Yearls",
      cost: "490/monthly",
      feature: "feature",
      cta: "Choose Plan",
    },
  ];
  return (
    <>
      <div
        id="Container"
        className="flex p-4 justify-center h-screen items-center gap-12"
      >
        {plans.map((plan, index) => (
          <>
            <div className="bg-white rounded-lg text-center shadow-md p-6 w-[350px] flex flex-col justify-center gap-5 border">
              <h2 className="text-2xl font-medium pb-5 mt-3">{plan.tier}</h2>
              <h3 className="text-xl font-medium pb-2">{plan.cost}</h3>
              <p>{`plan.feature ${index + 1}`}</p>
              <p>{`plan.feature ${index + 1}`}</p>
              <button className="bg-green-400 hover:bg-green-500 px-5 py-3 rounded-full font-medium text-white my-5">
                {plan.cta}
              </button>
              <PaypalButtons />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Subscription;
