import { BsGear } from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";
import { TbFileEuro, TbDeviceAudioTape, TbExchange } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { HiOutlineClipboardList, HiOutlinePaperClip } from "react-icons/hi";
import { IoIosArrowForward, IoMdHelpCircleOutline } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineBell, AiOutlineControl, AiOutlineGift } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";

export default function Home(){
    return (
        <div className="p-2 bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="h-10" src="/avatar.png" title="PERSON_NAME" alt="PERSON_NAME" />
                    <select className="ml-1 text-zinc-600 bg-white p-1 outline-none">
                        <option>967492692</option>
                    </select>
                </div>
                <div>
                    <BsGear className="text-zinc-600 w-6 h-6" />
                </div>
            </div>
            <div>
                <h1 className="text-zinc-600 text-2xl mt-3">Boa noite, Rui</h1>
                <h2 className="text-zinc-600 text-lg mt-2">Os meus consumos</h2>
                <div className="flex space-x-2 overflow-x-auto">
                    <div className="bg-white border p-3 rounded shadow min-w-[calc(100%-1rem)] w-full">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <FaSatelliteDish className="text-zinc-600 w-4 h-4" />
                                <p className="text-zinc-600">Lunar Net</p>
                            </div>
                            <p className="text-zinc-600">Incluído</p>
                        </div>
                        <div className="w-full bg-zinc-600 h-1 rounded mt-2">
                            <div className="bg-blue-500 w-[80%] h-1 rounded" />
                        </div>
                        <div className="flex mt-2 justify-between">
                            <p className="text-zinc-600 text-sm">24,58 GB disponíveis</p>
                            <p className="text-zinc-600 text-sm">Expira em 100 dias.</p>
                        </div>
                    </div>
                    <div className="bg-white border p-3 rounded shadow min-w-[calc(100%-1rem)] w-full">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-1">
                                <FaSatelliteDish className="text-zinc-600 w-4 h-4" />
                                <p className="text-zinc-600">Lunar Net</p>
                            </div>
                            <p className="text-zinc-600">Incluído</p>
                        </div>
                        <div className="w-full bg-zinc-600 h-1 rounded mt-2">
                            <div className="bg-blue-500 w-[80%] h-1 rounded" />
                        </div>
                        <div className="flex mt-2 justify-between">
                            <p className="text-zinc-600 text-sm">24,58 GB disponíveis</p>
                            <p className="text-zinc-600 text-sm">Expira em 100 dias.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between space-x-2 mt-2 select-none">
                    <div className="w-full bg-[#3e5bc7] p-2 shadow rounded">
                        <div className="flex items-center space-x-1">
                            <TbFileEuro className="text-white w-6 h-6" />
                            <p className="text-white">Saldo</p>
                        </div>
                        <p className="text-white text-3xl font-bold mt-3">€ 21,45</p>
                        <p className="text-white text-sm mt-3">Proxima cobrança: 21/05</p>
                    </div>
                    <div className="w-full p-2 shadow rounded border bg-white">
                        <div className="flex items-center space-x-1">
                            <TbDeviceAudioTape className="text-zinc-600 w-5 h-5" />
                            <p className="text-zinc-600">Lunar DJ</p>
                        </div>
                        <p className="text-zinc-600 mt-5">Têns 3 Vinis.</p>
                    </div>
                </div>
                <h2 className="text-zinc-600 text-lg mt-2">O meu serviço</h2>
                <div className="flex flex-col mt-2 bg-white">
                    <div className="flex items-center justify-between border-b border-t p-3">
                        <div className="flex items-center">
                            <HiOutlineClipboardList className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Ultimas Comunicações</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <BiWorld className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Roaming</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <IoAddOutline className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Aditivos</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <AiOutlineBell className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Notificações</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <AiOutlineControl className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Limites</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                </div>
                <h2 className="text-zinc-600 text-lg mt-2">O meu tarifário</h2>
                <div className="w-full bg-[#3e5bc7] p-2 shadow rounded">
                    <div className="flex items-center space-x-1">
                        <HiOutlinePaperClip className="text-white w-6 h-6" />
                        <p className="text-white">Tarifário</p>
                    </div>
                    <p className="text-white text-3xl font-bold mt-3">Lunar 30GB</p>
                    <p className="text-white text-sm">Tipo: Pré-Pago</p>
                </div>
                <h2 className="text-zinc-600 text-lg mt-2">Explorar</h2>
                <div className="mt-2">
                    <img src="/campanha-verao.jpg" className="w-full rounded" title="CAMPAIGN_NAME" alt="CAMPAIGN_NAME" />
                </div>
                <h2 className="text-zinc-600 text-lg mt-2">Ofertas e Extras</h2>
                <div className="flex flex-col mt-2 bg-white">
                    <div className="flex items-center justify-between border-b border-t p-3">
                        <div className="flex items-center">
                            <CiDiscount1 className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Codigo Promocional</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <AiOutlineGift className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">Ofertas do meu tarifário</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <TbExchange className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">SpacePoints</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                    <div className="flex items-center justify-between border-b p-3">
                        <div className="flex items-center">
                            <IoMdHelpCircleOutline className="w-8 h-8 text-zinc-600" />
                            <p className="text-zinc-600 ml-1 text-lg">FAQs</p>
                        </div>
                        <IoIosArrowForward className="w-6 h-6 text-[#3e5bc7]" />
                    </div>
                </div>
            </div>
        </div>
    );
}