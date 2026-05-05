import type { CSSProperties } from "react";

type PlaceholderVisualProps = {
  text: string;
  light?: boolean;
  minHeight?: number;
  imageSrc?: string;
  showLabel?: boolean;
  imagePosition?: string;
  imageFit?: CSSProperties["objectFit"];
};

export function PlaceholderVisual({
  text,
  light = false,
  minHeight,
  imageSrc,
  showLabel = true,
  imagePosition,
  imageFit = "cover"
}: PlaceholderVisualProps) {
  const useNaturalImageLayout = Boolean(imageSrc && imageFit === "contain");
  const style: CSSProperties = {
    ...(!useNaturalImageLayout && minHeight ? { minHeight } : {})
  };

  return (
    <div
      className={`placeholder ${light ? "light" : ""} ${imageSrc ? "has-image" : ""} ${
        useNaturalImageLayout ? "image-natural" : ""
      }`}
      style={style}
    >
      {imageSrc ? (
        <img
          alt={text}
          className="placeholder-image"
          src={imageSrc}
          style={{
            objectFit: imageFit,
            objectPosition: imagePosition ?? "center"
          }}
        />
      ) : null}
      {showLabel ? <span className="placeholder-label">{text}</span> : null}
    </div>
  );
}
