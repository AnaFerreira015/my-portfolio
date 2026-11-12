import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import Index from '@/pages/Index';
import { LanguageContext } from '@/i18n/context';

describe('projetos na página inicial', () => {
  it.each(['pt', 'en'] as const)('apresenta sete aplicações e prioriza projetos em %s', async (lang) => {
    const { container } = render(<MemoryRouter><LanguageContext.Provider value={lang}><Index /></LanguageContext.Provider></MemoryRouter>);
    const section = screen.getByRole('region', { name: lang === 'pt' ? 'Projetos que você pode explorar' : 'Projects you can explore' });
    expect(within(section).getAllByRole('article')).toHaveLength(7);
    const links = within(section).getAllByRole('link');
    expect(links).toHaveLength(7);
    for (const link of links) {
      expect(link).toHaveAttribute('href', expect.stringContaining('.ferreira-af.workers.dev/'));
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
    expect(container.querySelector('#projects')!.compareDocumentPosition(container.querySelector('#experience')!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect((await axe(section)).violations).toEqual([]);
  });
});
