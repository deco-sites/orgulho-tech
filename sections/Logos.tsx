import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(4)
  .fill(0)
  .map(() => ({
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
    altText: "Logo",
  }));

export default function Logos({
  title = "Edit this heading however you wanto",
  logos = IMG_PLACEHODLER,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-12">
        <p class="text-center text-lg">{title}</p>
        <div class="flex flex-wrap justify-center gap-12">
          {logos?.map((logo) => {
            return (
              <div class="flex">
                <Image
                  src={logo.src || ""}
                  alt={logo.altText || ""}
                  width={200}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
