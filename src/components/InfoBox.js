const InfoBox = ({ infoBoxData, serverData }) => {
  return (
    <div className="flex flex-row w-full bg-googleMapsGrey rounded-lg md:mr-16">
      <img
        src={infoBoxData.qrCodeURL}
        style={{ width: "12rem" }}
        className="hidden md:block p-4"
        alt=""
      />
      <div className="p-4">
        <h3 className="font-bold text-2xl md:text-left">{infoBoxData.name}</h3>
        <h3 className="md:text-left">{infoBoxData.address}</h3>

        <h3 className="mt-8">{serverData && 'Number of items: '+serverData.objects_num}</h3>
      </div>
    </div>
  );
};

export default InfoBox;
