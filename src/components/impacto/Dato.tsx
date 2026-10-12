import Cifra from "../Cifra";
import Revelar from "../Revelar";

// Tarjeta de número: papel crema con sombra interior.
export default function Dato({
  valor,
  etiqueta,
  nota,
  tamEtiqueta = 29,
  className = "",
  children,
  retraso = 0,
}: {
  valor: string;
  etiqueta: string;
  nota: string;
  tamEtiqueta?: number;
  className?: string;
  children?: React.ReactNode;
  retraso?: number;
}) {
  return (
    <Revelar className={`flex ${className}`} retraso={retraso}>
      <div className="relative flex w-full flex-col items-start gap-[15px] overflow-clip rounded-[25px] bg-crema px-[30px] py-[20px] text-azul-footer transition-transform duration-300 hover:-translate-y-1">
        <div className="font-expanded flex flex-col items-start gap-[8px] font-bold">
          <p className="text-[90.462px] leading-normal">
            <Cifra texto={valor} />
          </p>
          <p className="leading-normal" style={{ fontSize: tamEtiqueta }}>
            {etiqueta}
          </p>
        </div>
        <p className="font-expanded text-[25px] font-light italic leading-normal tracking-[-0.75px]">
          {nota}
        </p>
        {children}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_20px_0px_rgba(0,0,0,0.2)]" />
      </div>
    </Revelar>
  );
}
