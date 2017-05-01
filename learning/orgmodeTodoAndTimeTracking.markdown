Paste this into emacs and follow along:

```org
#+STARTUP: showall logdone entitiespretty
#+TODO: TODO(t) WAITING(w!) | DONE(d!) CANCELLED(c!)

Let's start with todo lists. They start with headlines.

To add a headline, just use a star at the beginning of a line.

* Like so.

And then you can use multiple stars to indicate subheaders.

* Main
** Sub
*** Sub sub
**** Sub sub sub
***** Sub sub sub sub
****** Sub sub sub sub sub
******* Sub sub sub sub sub sub

And so on.

You can create lists within headlines, too.

* Headline
  + List item. Press M-RET!
  + Boom. Another list item.
* Oh, and hey, dashes work too.
  - See.
  - Told ya.

Start a test file and try all the shortcuts below 'til you are familiar with them:

|---------------+---------------------------|
| Shortcut      | Function                  |
|---------------+---------------------------|
| TAB           | unfold                    |
| S-TAB         | global unfold             |
| M-up/down     | move a headline           |
| M-left/right  | promote/demote a headline |
| M-RET         | new headline              |
| C-(c n/p/f/b) | move between headlines    |
| C-(c u)       | move headline up a level  |
| C-(c x w)     | kill, copy a headline     |
| C-(c x) M-w   | copy a headline           |
|---------------+---------------------------|

* Now a simple list of headlines isn't much of a todo list, is it? 

We need to indicate statuses. Todo tasks, done tasks, cancelled tasks, and so on. So let's try just writing TODO in front of a headline:

* TODO Hmmm. "TODO" is in a different color there...

Here's something else. Create a headline, then C-(c t) it.

* The item before.
* TODO The item after. And if we do it again...
* DONE We get this.

Let's quickly add some extras here. Specifically:
- Priorities.
- More states than TODO and DONE.
- Timestamps for state changes.
- Checkboxes for sub-items.

* This is a headline
** This is a sub-item with a checklist [50%]
- [ ] Checkbox
- [X] Another checkbox
** This one also has a checklist [1/2]
- [X] Checked
- [ ] Unchecked
* DONE [#B] This headline has a priority. It also has a closing timestamp due to 'logdone' being present in the #+STARTUP field.
  CLOSED: [2017-04-15 Sat 17:23]

* CANCELLED Here we have a non-default state, since we added a #+TODO up top. '!' there specifies a timestamp, '@' specifies a timestamp and a note.
  CLOSED: [2017-04-15 Sat 17:29]

|--------------+-------------------------------|
| Shortcut     | Function                      |
|--------------+-------------------------------|
| C-(c t)      | cycle states                  |
| S-right/left | also cycle states             |
|--------------+-------------------------------|
| C-(c c)      | toggle checkbox state         |
| C-(c x b)    | toggle checkbox state         |
| C-(u c x b)  | turn list item into checkbox  |
|--------------+-------------------------------|
| C-c ,        | set priority                  |
| S-up/down    | change priority               |
|--------------+-------------------------------|


Alright, enough with TODO lists. Let's get to time tracking.

See the shortcuts below:

|-----------------+--------------------------------------|
| Shortcut        | Function                             |
|-----------------+--------------------------------------|
| C-(c x i)       | clock in                             |
| C-(c x o)       | clock out                            |
| C-(u c x i)     | clock in, select from recents list   |
| C-(u u c x i)   | clock in, mark task as default       |
| C-(u u u c x i) | clock in from last                   |
| C-(c x x)       | reclock last task                    |
| C-S-up/down     | increase/decrease both stamps        |
| C-(c x q)       | cancel current clock                 |
| C-(c x j)       | jump to currently clocked item       |
| C-(c x d)       | display time summaries               |
| C-(c x r)       | insert clock report                  |
|-----------------+--------------------------------------|

Thus:

* DONE Item one
  CLOSED: [2017-04-15 Sat 18:26]
  - State "DONE"       from "TODO"       [2017-04-15 Sat 18:26]
  :LOGBOOK:
  CLOCK: [2017-04-14 Fri 18:19]--[2017-04-14 Fri 19:20] =>  1:01
  CLOCK: [2017-04-13 Thu 18:02]--[2017-04-13 Thu 18:30] =>  0:28
  :END:
* TODO [#A] Item two
** TODO Sub-item
   :LOGBOOK:
  CLOCK: [2017-04-15 Sat 18:47]--[2017-04-15 Sat 18:49] =>  0:02
  CLOCK: [2017-04-15 Sat 15:05]--[2017-04-15 Sat 16:05] =>  1:00
  :END:
** TODO [#C] Another sub-item
   :LOGBOOK:
   CLOCK: [2017-04-15 Sat 18:29]--[2017-04-15 Sat 18:51] =>  0:02
   :END:

And then at the end of the week, when you wanna take a look at how much time you've spent on your studying:

#+BEGIN: clocktable :maxlevel 2 :scope file :block 2017-W15
#+CAPTION: Clock summary at [2017-04-15 Sat 18:51], for week 2017-W15.
| Headline                  |   Time |      |
|---------------------------+--------+------|
| *Total time*              | *2:53* |      |
|---------------------------+--------+------|
| DONE Item one             |   1:29 |      |
| TODO Item two             |   1:24 |      |
| \_  TODO Sub-item         |        | 1:02 |
| \_  TODO Another sub-item |        | 0:22 |
#+END:

What was done there? C-(c x r) to insert the table. Then the :scope was changed to file. Then :block was set to the current week.

If you're doing this on Sunday and have no idea which week of the year it is, try using :tstart and :tend instead. E.g.

#+BEGIN: clocktable :maxlevel 1 :scope file :tstart "<-1w>" :tend "<now>"
#+CAPTION: Clock summary at [2017-04-15 Sat 18:51]
| Headline      |   Time |
|---------------+--------|
| *Total time*  | *2:53* |
|---------------+--------|
| DONE Item one |   1:29 |
| TODO Item two |   1:24 |
#+END:

Here :maxlevel was set to one, thus we have one column less. Also, whenever you change one
of those properties, update the table with C-(c c). A setting that might be of interest is
":step day" to have it broken down by day.

And finally...

You want to be able to change views for all these items. For example, display TODO items
only. For this, you should need the agenda.

The firt step is to add the current file to the agenda, which you can do with: C-c [

And now you can use C-c a t to view only your open todo items, sorted by priority. The default priority is B. So you can simply use A for top priority, and C for low priority.

|----------+---------------------------------|
| Shortcut | Function                        |
|----------+---------------------------------|
| C-c [    | add current file to agenda      |
| C-c ]    | remove current file from agenda |
| C-c a t  | show open todo items            |
|----------+---------------------------------|

(Note: If you're on spacemacs, you might need to bind a key to access the org mode agenda.
Like so: M-x global-set-key RET C-c a org-agenda RET)

```














