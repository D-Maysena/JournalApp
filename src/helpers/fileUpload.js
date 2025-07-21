export const fileUpload = async (file) => {
  if (!file) throw new Error("No hay archivos para subir");

  const formData = new FormData();
  formData.append("UPLOADCARE_PUB_KEY", import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY);
  formData.append("UPLOADCARE_STORE", "1"); 
  formData.append("file", file); 

  try {
    const resp = await fetch("https://upload.uploadcare.com/base/", {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir");

    const data = await resp.json();
    const fileUrl = `https://ucarecdn.com/${data.file}/`; 
    console.log("Imagen subida:", fileUrl);
    return fileUrl;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
