/* Java Program to Delete Specific Node of the Linkedlist */

public class Delcrtlinkedlist
{
private Listnode head;
private static class Listnode
{
private int data;
private Listnode next;
public Listnode(int data)
{
this.data = data;
this.next = null;
}
}
public void display()
{
Listnode current = head;
while(current!=null)
{
System.out.print(current.data+"-->");
current = current.next;
}
System.out.println("null");
}
public void delcrtpos(int pos)
{
Listnode previous = head;
Listnode current = head;
if(head==null)
{
System.out.println("Linkedlist is Empty");
}
else if(pos == 1)
{
head = current.next;
}
else
{
while(pos!=1)
{
previous = current;
current = current.next;
pos--;
}
previous.next = current.next;
current = null;
}
}
public static void main(String args[])
{
Delcrtlinkedlist delcrt = new Delcrtlinkedlist();
delcrt.head = new Listnode(2);
Listnode first = new Listnode(3);
Listnode second = new Listnode(4);
Listnode third = new Listnode(7);
delcrt.head.next = first;
first.next = second;
second.next = third;
delcrt.display();
delcrt.delcrtpos(3);
delcrt.display();
}
}