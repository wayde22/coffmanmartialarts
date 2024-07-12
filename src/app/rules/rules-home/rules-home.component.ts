import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules-home',
  templateUrl: './rules-home.component.html',
  styleUrls: ['./rules-home.component.css']
})
export class RulesHomeComponent implements OnInit {

  coffman_rules: string[] = [
    'Calling someone Ma\'am or Sir is not reserved just for the Dojo. Make an effort to refer to every adult in this manner.',
    'Good grades are expected. Study hard, complete your work and make the best grades you possibly can. The most powerful weapon is knowledge.',
    'Excellent behavior at school and in public is expected at all times. You are representing not only yourself but your parents and your Martial Arts School. Excellent behavior at home is also expected.',
    'Respect your parents and your instructor by doing what is asked of you, the first time it is asked.',
    'So not use your Tae Kwon-Do skills on others, especiall at school. All of the kicks and strikes that you learn can be very dangerous, especially if they are not controlled. Only perform your kicks, strikes, ets, at Tae Kwon-Do in front of an instructor.',
    'Never use the words, "I Can\'t." These words mean that you have already given up and that you are not willing to put forth the extra effort.'
  ]

  dojang_rules: string[] = [
    'Bow to the instructor when entering and leaving the Dojo.',
    'Bow to the flag when entering and leaving the Dojo.',
    'Respect all higher ranks, especially the instructors.',
    'Have a clean uniform at all times, folded neatly before leaving.',
    'Maintain discipline; know the tenets of the art and the student creed.',
    'Contact the instructor if you are going to be late or unable to attend.',
    'Food, chewing gum, drugs and alcohol are not allowed in the Dojo.',
    'No profanity, loud talking or horseplay in the Dojo.',
    'Do not face the instructor while tying your belt.',
    'Do not teach without instructors’ permission.',
    'Report all injuries to the instructor.',
    'Do not try any techniques until an instructor has shown them to you.',
    'Anyone not following these rules could be reduced in rank.'
  ]

  home_rules: string[] = [
    'Children shall greet their parents when they enter the house and tell them good-bye when they leave.',
    'Children shall at all times be respectful to their parents and grandparents.',
    'Children shall strive for a good relationship with their siblings.',
    'Children shall willingly help with household chores.',
    'Children shall report to their parents when they have finished assigned tasks.',
    'Children shall be responsible for the cleanliness and upkeep of their own room.',
    'Children shall practice daily cleanliness in the matter of hair, nails, teeth and body.',
    'Children shall abide by their parents decisions.',
    'Children shall not interrupt adult conversation.',
    'Children shall refrain from rowdy, inappropriate behavior in the home.',
    'Children shall possess an active mind, body and spirit.',
    'Children shall diligently study their school work both at school and home.',
    'Children shall at all times show respect for their school, teachers and peers.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
