require('dotenv').config();
const { Dropbox } = require('dropbox')
const fs = require('fs');

const FILE_PATH = "files/test_img.png";
const FILE_NAME = "/test_img.png";


describe('Dropbox API', () => {
  const accessToken = process.env.DROPBOX_ACCESS_TOKEN
  const dropbox = new Dropbox({ accessToken });

  describe('Upload a file', () => {
    it('should upload a file successfully', async () => {
      const fileContent = fs.readFileSync(FILE_PATH);

      const response = await dropbox.filesUpload({
        path: FILE_NAME,
        contents: fileContent,
      });

      expect(response.status).toBe(200);
    });
  });

  describe('Get a metadata', () => {
    beforeAll(async () => {
        // Upload a file to be deleted
        await dropbox.filesUpload({
          path: FILE_NAME,
          contents: fs.readFileSync(FILE_PATH)
        });
      });

    it('should retrieve file metadata successfully', async () => {
      const response = await dropbox.filesGetMetadata({ path: FILE_NAME });

      expect(response.status).toBe(200);
      // Additional assertions for file metadata if needed
    });

    afterAll(async () => {
        // Clean up the file after the test
        await dropbox.filesDeleteV2({ path: FILE_NAME });
      });
  });

  describe('Delete a file', () => {
    beforeAll(async () => {
      // Upload a file to be deleted
      await dropbox.filesUpload({
        path: FILE_NAME,
        contents: fs.readFileSync(FILE_PATH)
      });
    });

    it('should delete a file successfully', async () => {
      const response = await dropbox.filesDeleteV2({ path: FILE_NAME });

      expect(response.status).toBe(200);
      // Additional assertions after file deletion if needed
    });
  });
});
