describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should have welcome screen', async () => {
    // adjust selector for your app. Example: an element with testID "welcome"
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
