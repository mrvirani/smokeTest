describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
