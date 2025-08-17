export const uploadToBlob = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/upload`, {
    method: 'POST',
    body: formData, // ✅ FormData automatically sets multipart/form-data
  });

  return res.json();
}
