describe('Decode entities', () => {
  it('should decode entities', () => {
    expect(asciidoctor.browser.decodeEntities('Hansel et Gretel')).toBe('Hansel et Gretel');
    expect(asciidoctor.browser.decodeEntities('Hansel & Gretel')).toBe('Hansel & Gretel');
    expect(asciidoctor.browser.decodeEntities('Hansel &amp; Gretel')).toBe('Hansel & Gretel');
    expect(asciidoctor.browser.decodeEntities('Hansel&#x20&amp;&#x20Gretel')).toBe('Hansel & Gretel');
  });
});