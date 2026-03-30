import { pick } from "@react-native-documents/picker";

export const pickPrescription = async () => {
  try {
    const result = await pick({
      type: ["image/*", "application/pdf"],
      allowMultiSelection: false,
    });

    return result[0];
  } catch (err: any) {
    if (err?.message?.includes("cancel") || err?.code === "DOCUMENT_PICKER_CANCELED") {
      throw "User cancelled";
    }
    throw err;
  }
};