import Section from '../components/Section'
import skills from '../data/skills.json'

type SkillGroup = {
  category: string
  items: string[]
}

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <div className="skills-categories row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 g-lg-4 mt-2">
        {(skills as SkillGroup[]).map((group) => (
          <div key={group.category} className="col">
            <div className="skills-category">
              <h3 className="skills-category-title mb-3">{group.category}</h3>

              <ul className="skills-list d-grid gap-2 mb-0">
                {group.items.map((item) => (
                  <li key={item} className="skills-list-item">
                    <span className="skill-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
