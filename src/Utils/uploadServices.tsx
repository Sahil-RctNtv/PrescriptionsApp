import { supabase } from "../SupaBase/SupaBase";

export const uploadToSupabase = async (file) => {
  try {
    const originalName = file.name || file.fileName || "file";
    const ext = originalName.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}.${ext}`;
    const mimeType = file.type || (ext === "pdf" ? "application/pdf" : "image/jpeg");

    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      name: fileName,
      type: mimeType
    } as any);

    const { error } = await supabase.storage
      .from("prescriptions")
      .upload(fileName, formData, {
        upsert: false,
      });

    if (error) {
      console.log("Upload error:", JSON.stringify(error, null, 2));
      return null;
    }

    return fileName;
  } catch (err) {
    console.log("Upload exception:", err);
    return null;
  }
};
  } catch (err) {
    console.log("Upload exception:", err);
    return null;
  }
};

export const getFileUrl = (filePath) => {
  const { data } = supabase.storage
    .from("prescriptions")
    .getPublicUrl(filePath);

  return data?.publicUrl || null;
};

export const savePrescription = async (fileUrl, fileName, fileType) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      console.log("No user found");
      return;
    }

    const { error } = await supabase.from("prescriptions").insert([
      {
        user_id: user.id,
        file_url: fileUrl,
        file_name: fileName,
        file_type: fileType,
      },
    ]);

    if (error) {
      console.log("DB insert error:", error);
    }
  } catch (err) {
    console.log("savePrescription error:", err);
  }
};

export const handleUpload = async (file) => {
  try {
    const filePath = await uploadToSupabase(file);

    if (!filePath) return null;

    const fileUrl = getFileUrl(filePath);

    if (!fileUrl) return null;

    await savePrescription(
      fileUrl,
      file.name || file.fileName,
      file.type
    );

    return fileUrl;
  } catch (err) {
    console.log("handleUpload error:", err);
    return null;
  }
};

export const uploadFromUrl = async (url) => {
  try {
    await savePrescription(url, "Uploaded Link", "link");
    return true;
  } catch (err) {
    console.log("uploadFromUrl error:", err);
    return null;
  }
};