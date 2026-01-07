---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download CV (PDF)]({{ base_path }}/files/cv_2026_juel.pdf)

Education
======
* Ph.D in Neuroscience of Consciousness, University of Oslo, 2020 (expected)
* Lecturer in Natural Science, Physics, and Mathematics, Norwegian University of Life Sciences, 2014
* M.Sc. in Theoretical Neuroscience, Norwegian University of Science and Technology, 2013
* B.Sc. in Physics, University of Oslo, 2010

Work experience
======
* Dec 2023 - Current: Senior researcher and Project Leader
  * Kongsberg Hospital, Vestre Viken Health Trust
  * Duties includes: Leading a research project funded by the Norwegian Research Council
  * Closest leader: Gernot Ernst, PhD, MD

* 2019 - 2023: PostDoctoral Researcher (50%)
  * University of Oslo
  * Duties included: Carrying out empirical tests of scientific theories of consciousness with human subjects
  * Supervisor: Prof Johan F. Storm, MD, PhD

* 2019 - 2023: PostDoctoral Researcher (50%)
  * University of Wisconsin - Madison
  * Duties included: Developing and disseminating a scientific theory of consicousness (see e.g. [IIT-wiki](https://www.iit.wiki).
  * Supervisor: Prof Giulio Tononi, MD, PhD

* 2019 - 2023: PhD Candidate
  * University of Oslo
  * Duties included: Developing and testing objective measures of consciousness with empirical and theoretical studies. 
  * Supervisor: Prof Johan F. Storm, MD, PhD
 
Skills
======

* Supervision and teaching
  * Licensed lecturer in natural sciences
  * supervised several students at MSc and PhD level
* Experimental planning and execution
  * Set up and successfully complete complex research projects
  * supervise novice student through a full research cycle
* Multidisciplinary collaboration
  * well versed in team work and leadership of teams with diverse backgrounds
* Analysis of time-series data, e.g.:
  * multivariate autoregressive modeling
  * time-frequency decompositions
  * causal analysis
  * graph theory
  * complexity quantification

[Academic Contributions](https://bjorneju.github.io/publications/)
======
{% for category in site.publication_category %}
  {% assign posts_in_category = site.collections['publications'].docs | where: "category", category.category %}
  <i><h3>{{ category[1].title }}</h3></i>
    <ul>{% for post in posts_in_category reversed %}
    {% include archive-single-cv-pub.html %}
  {% endfor %}</ul>
{% endfor %}

[Funding and awards](https://bjorneju.github.io/funding/)
======
{% for category in site.funding_category %}
  {% assign posts_in_category = site.collections['funding'].docs | where: "category", category.category %}
  <i><h3>{{ category[1].title }}</h3></i>
    <ul>{% for post in posts_in_category reversed %}
    {% include archive-single-cv-fund.html %}
  {% endfor %}</ul>
{% endfor %}
  
[Teaching](https://bjorneju.github.io/teaching/)
======
{% for category in site.teaching_category %}
  {% assign posts_in_category = site.collections['teaching'].docs | where: "category", category.category %}
  <i><h3>{{ category[1].title }}</h3></i>
    <ul>{% for post in posts_in_category reversed %}
    {% include archive-single-cv-teach.html %}
  {% endfor %}</ul>
{% endfor %}
  
