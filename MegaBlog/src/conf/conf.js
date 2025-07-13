const conf = {
  appwriteUrl : Stringg(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId : Stringg(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_IDL),
  appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf