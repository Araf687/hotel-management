"use client";
import React, { useRef, useState } from "react";
import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form";

interface FileInputProps<T extends FieldValues> {
  name: Path<T>;
  form: UseFormReturn<T>;
  accept?: string;
  imageNameMaxLength?: number;
}

const FileInput = <T extends FieldValues>({
  name,
  form,
  accept,
  imageNameMaxLength = 40,
}: FileInputProps<T>) => {
  const {getValues}=form;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputAreaClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue(name, file as PathValue<T, Path<T>>); // Ensure type compatibility
      setFileName(file.name);
    }
  };

  const truncateFileName = (name: string, maxLength: number) => {

    if (name && name.length > maxLength) {
      const part = name.substring(0, 13);
      const extension = name.substring(name.lastIndexOf("."));
      return `${part}...${extension}`;
    }
    return name;
  };
  const [fileName, setFileName] = useState<string | null>(truncateFileName(getValues(name),imageNameMaxLength));

  const clearInput = () => {
    form.setValue(name, null as PathValue<T, Path<T>>); // Ensure compatibility with schema
    setFileName(null);
  };

  return (
    <div
      className="w-full bg-white rounded-lg gap-2 flex justify-between items-center border border-gray-300 cursor-pointer"
      onClick={handleInputAreaClick}
    >
      <div className="flex items-center gap-1">
        <div className="w-[82px] bg-gray-100 rounded-l-lg">
          <p className="text-center p-[5px]">Choose</p>
          <input
            className="hidden"
            type="file"
            name={String(name)}
            ref={inputRef}
            onChange={onChangeFile}
            accept={accept || "image/*,application/pdf"}
          />
        </div>
        <div>
          {fileName && (
            <p className="truncate pl-2 text-sm">
              {truncateFileName(fileName, imageNameMaxLength)}
            </p>
          )}
        </div>
      </div>
      <div>
        {fileName && (
          <p
            className="text-red-600 mx-2 text-sm text-wide"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the file input
              clearInput();
            }}
          >
            Clear
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInput;