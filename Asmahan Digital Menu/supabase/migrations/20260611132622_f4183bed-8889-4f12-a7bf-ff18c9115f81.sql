
CREATE POLICY "Public read dish-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'dish-images');

CREATE POLICY "Public upload dish-images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'dish-images');

CREATE POLICY "Public update dish-images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'dish-images')
WITH CHECK (bucket_id = 'dish-images');

CREATE POLICY "Public delete dish-images"
ON storage.objects FOR DELETE
USING (bucket_id = 'dish-images');
