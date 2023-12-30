import Image from 'next/image'

const question2 = () =>  {
  return (
    <div id="FrageRoot" className="flex flex-row w-full items-start">
  <div
    id="AtomsColorsBlack"
    className="bg-[#cccccc] flex flex-col mb-1 pb-px w-full items-start"
  >
    <div
      id="AtomsColorsBlack1"
      className="bg-[#208207] flex flex-row w-full items-start pt-2 pl-[685px] pr-[624px]"
    >
      <div className="text-xl font-['Krona_One'] bg-[#acd464] flex flex-row w-16 h-10 items-start mt-px mb-2 pt-2 px-1 rounded">
        AEM
      </div>
    </div>
    <div className="flex flex-row justify-between w-full items-start">
      <img
        src="https://file.rendit.io/n/hpfj01rf6pQAPa9URg5W.png"
        alt="DanielromeroaiUAxBNeXkunsplash"
      />
      <div className="flex flex-col mt-12 gap-20 w-1/2 font-['iA_Writer_Mono_S'] items-start">
        <div className="flex flex-col gap-4 w-full items-start">
          <div
            id="Header"
            className="text-center text-5xl font-bold leading-[64px]"
          >
            Frage 2
          </div>
          <div id="Title" className="text-3xl ml-8 w-full">
            Welcher Faktor ist entscheidend für die Umweltfreundlichkeit von
            Elektronikgeräten?
          </div>
        </div>
        <div className="flex flex-col ml-8 gap-10 w-full items-start">
          <div className="flex flex-row gap-4 w-1/2 items-start mb-px ml-8">
            <img
              src="https://file.rendit.io/n/tyOwGPFrOJEtRlFx6CiI.svg"
              alt="Icon3"
              id="Icon3"
              className="w-6"
            />
            <div id="SomethingGoesHere3" className="leading-[24px]">
              Höchstmögliche Verpackungsdichte
            </div>
          </div>
          <div className="flex flex-row ml-8 gap-4 w-1/3 items-start">
            <img
              src="https://file.rendit.io/n/OwNjClfxxC4xWiFtmZI7.svg"
              alt="Icon2"
              id="Icon2"
              className="w-6"
            />
            <div id="SomethingGoesHere2" className="leading-[24px]">
              Geplante Obsoleszenz
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full font-['iA_Writer_Mono_S'] items-start">
            <div className="flex flex-row ml-8 gap-4 w-3/5 items-start">
              <img
                src="https://file.rendit.io/n/dpo7zN3lgXT6mfLpGrQI.svg"
                alt="Icon1"
                id="Icon1"
                className="w-6"
              />
              <div id="SomethingGoesHere1" className="leading-[24px]">
                Niedriger Energieverbrauch im Betrieb
              </div>
            </div>
            <div className="relative flex flex-row w-full items-start">
              <div
                id="SomethingGoesHere"
                className="leading-[24px] absolute top-0 left-20 h-6 w-[394px]"
              >
                Verwendung nicht recycelbarer Materialien
              </div>
              <img
                src="https://file.rendit.io/n/UOJYbQNmKQjLazyc3NZq.svg"
                alt="Group"
                className="w-64 h-48 absolute top-4 left-[394px]"
              />
              <div className="relative flex flex-col mb-8 gap-20 w-1/2 h-[179px] items-start">
                <img
                  src="https://file.rendit.io/n/sUiUic2j6ZzDrpVM8vwH.svg"
                  alt="Icon"
                  id="Icon"
                  className="ml-8 w-6"
                />
                <button
                  id="Button1"
                  className="border-solid bg-[#50d755] flex flex-row w-full cursor-pointer items-start border-black border"
                >
                  <div className="text-center text-3xl font-['iA_Writer_Mono_S'] uppercase text-white bg-[url(https://file.rendit.io/n/8L0vcNYP8vFDedyuWV4I.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-full h-16 items-start my-0">
                    Weiter
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}
export default question2;