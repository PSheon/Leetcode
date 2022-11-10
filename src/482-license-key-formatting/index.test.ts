import licenseKeyFormatting from './index.js';

describe('482. License Key Formatting', () => {
  it('should pass test case - 01', () => {
    const result = licenseKeyFormatting('5F3Z-2e-9-w', 4);
    expect(result).toEqual('5F3Z-2E9W');
  });

  it('should pass test case - 02', () => {
    const result = licenseKeyFormatting('2-5g-3-J', 2);
    expect(result).toEqual('2-5G-3J');
  });

  it('should pass test case - 03', () => {
    const result = licenseKeyFormatting('5F3Z-2E9WA-SDASD-123AS-DASD', 4);
    expect(result).toEqual('5F3-Z2E9-WASD-ASD1-23AS-DASD');
  });
});
