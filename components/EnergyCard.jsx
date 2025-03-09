const EnergyCard = ({ listing }) => {
  return (
    <div className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Seller: {listing.seller}
          </h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              Available: {listing.quantity.toLocaleString()} MWH
            </p>
            <p className="text-gray-500 text-sm">
              Updated: {listing.period}
            </p>
          </div>
        </div>
        <div className="text-right space-y-3">
          <p className="text-xl font-bold">
            ${listing.price}/kWH
          </p>
          <button 
            className="bg-[#0f172a] text-white px-6 py-2 rounded-md hover:bg-[#1e293b] transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnergyCard; 