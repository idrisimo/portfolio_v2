import {default as HeroImage} from '.'
import {screen, render} from '@testing-library/react'

describe('HeroImage', ()=> {
    test('it renders the hero image', () => {
        render(<HeroImage/>)
        const heading = screen.getByRole()
        expect(heading.textContent).toContain("Idris Silva")
    })
})
